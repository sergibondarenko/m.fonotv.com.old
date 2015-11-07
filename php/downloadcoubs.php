<?php

include 'functions.php';

$myParams = json_decode(file_get_contents('php://input'),true);
//print_r($myParams['coubText']);

if(!empty($myParams['coubText'])){
	$myCoubUrl = $myParams['coubText'];
} else {
	$myCoubUrl = 'http://coub.com/view/8k31g';
}

$html = remote_get_contents($myCoubUrl);

$doc = new DOMDocument();
libxml_use_internal_errors(true);
@$doc->loadHTML($html); // loads your HTML
$xpath = new DOMXPath($doc);
// returns a list of all links with rel=nofollow
$nlist = $xpath->query("//script[@id='coubPageCoubJson']");

$potJsonStr = '';
foreach($nlist as $node){
	$potJsonStr .= "{$node->nodeName} - {$node->nodeValue}";
}

$potJsonStr = substr($potJsonStr, 10);

$jsonStr = json_decode($potJsonStr, true);

if(array_key_exists('video', $jsonStr["file_versions"]["html5"])){
	echo $jsonStr["file_versions"]["html5"]["video"]["high"]["url"];
} else if(array_key_exists('url', $jsonStr["file_versions"]["iphone"])){
	echo $jsonStr["file_versions"]["iphone"]["url"];
}

//print_r($jsonStr); 

?>
