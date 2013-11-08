<?php
/*0905
*1.添加tag时同步到vod_keywords字段
*2.增加断点续加功能
*/
class TaglistAction extends BaseAction{
	//批量生成影视TAG
    public function index(){
		$currentpage = !empty($_GET['p'])?intval($_GET['p']):1;
		// 检测是否有任务未完成
		if($currentpage == 1){
			$jumpurl = F('_tag/jumpurl_vod');
			if($jumpurl){
				header("Location: ".$jumpurl);
			}
		}
		// 查询数据
		$rs = D('Vod');$rst = D('Tag');
		$count = $rs->count('vod_id');
		$totalpages = ceil($count/10);
		$list = $rs->field('vod_id,vod_name,vod_content')->where('vod_status = 1')->order('vod_id desc')->limit(10)->page($currentpage)->select();	
		foreach($list as $key=>$value){
			$tag = $rst->where('tag_sid = 1 and tag_id = '.$value['vod_id'])->find();
			if($tag){
				dump($value['vod_id'].' 已有TAG 跳过');
			}else{
				$keywords = ff_tag_auto($value['vod_name'],$value['vod_content']);
				if($keywords){
					$tag_arr = explode(',',$keywords);
					$tag_arr = array_unique($tag_arr);
					foreach($tag_arr as $value2){
						$rst->data(array('tag_id'=>$value['vod_id'],'tag_sid'=>1,'tag_name'=>$value2))->add();
						dump($rst->getLastSql());
					}
					//将tag同步到vod字段方便查询
					$edit = array();
					$edit['vod_id'] = $value['vod_id'];
					$edit['vod_keywords'] = implode(',',$tag_arr);
					$rs->data($edit)->save();
				}
			}
		}
		if($currentpage < $totalpages){
			F('_tag/jumpurl_vod','?s=plus-taglist-index-p-'.($currentpage+1));
			$this->redirect('Plus-Taglist/index',array('p'=>$currentpage+1), 3,'减小服务器压力，3秒后进行下一次操作~');
		}else{
			F('_tag/jumpurl_vod',NULL);
			dump('完成');
		}
    }
	//批量生成新闻TAG
    public function news(){
		$currentpage = !empty($_GET['p'])?intval($_GET['p']):1;
		// 检测是否有任务未完成
		if($currentpage == 1){
			$jumpurl = F('_tag/jumpurl_news');
			if($jumpurl){
				header("Location: ".$jumpurl);
			}
		}		
		//查询数据
		$rs = D('News');$rst = D('Tag');
		$count = $rs->count('news_id');
		$totalpages = ceil($count/10);
		$list = $rs->field('news_id,news_name,news_content')->where('news_status = 1')->order('news_id desc')->limit(10)->page($currentpage)->select();	
		foreach($list as $key=>$value){
			$tag = $rst->where('tag_sid = 2 and tag_id = '.$value['news_id'])->find();
			if($tag){
				dump($value['news_id'].' 已有TAG 跳过');
			}else{
				$keywords = ff_tag_auto($value['news_name'],$value['news_content']);
				if($keywords){
					$tag_arr = explode(',',$keywords);
					$tag_arr = array_unique($tag_arr);
					foreach($tag_arr as $value2){
						$rst->data(array('tag_id'=>$value['news_id'],'tag_sid'=>2,'tag_name'=>$value2))->add();
						dump($rst->getLastSql());
					}
					//将tag同步到vod字段方便查询
					$edit = array();
					$edit['news_id'] = $value['news_id'];
					$edit['news_keywords'] = implode(',',$tag_arr);
					$rs->data($edit)->save();		
				}
			}
		}
		if($currentpage<$totalpages){
			F('_tag/jumpurl_news','?s=plus-taglist-news-p-'.($currentpage+1));
			$this->redirect('Plus-Taglist/news',array('p'=>$currentpage+1), 3,'页面跳转中~');
		}else{
			F('_tag/jumpurl_news',NULL);
			dump('完成');
		}
    }	
}
?>