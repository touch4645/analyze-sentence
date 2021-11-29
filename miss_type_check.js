//レスポンスはJSONで返る
function analyzeProof(content, A3rt_KEY){
  let data = {
    'document' : {
      'type' : 'PLAIN_TEXT',
      'language' : 'ja',
      'content' : content
    },
    'encodingType': 'UTF8'
  }; 
  let params = {
    'contentType' : 'application/json',
    'method' : 'post',
    'payload' : JSON.stringify(data)
  };
  
  let url = 'https://api.a3rt.recruit-tech.co.jp/proofreading/v2/typo?apikey='+A3rt_KEY+'&sentence='+content;
  return UrlFetchApp.fetch(url, params);
}


function checkMissType() {
  
  /*---------------------------
  GASで誤字検知API叩く
  --------------------------*/

  const A3rt_KEY = PropertiesService.getScriptProperties().getProperty("a3rt_key");
  //***分析する文章を書く***
  const content = "システムあｂ企画から開発"
  let json = JSON.parse(analyzeProof(content, A3rt_KEY));
  
  console.log(json["checkedSentence"]);
}
