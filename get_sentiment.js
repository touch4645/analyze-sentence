//レスポンスはJSONで返る
function analyzeSentiment(content, API_KEY){
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
  let url = 'https://language.googleapis.com/v1/documents:analyzeSentiment?key=' + API_KEY;
  return UrlFetchApp.fetch(url, params);
}


function getSentiment(content) {
  
  /*---------------------------
  GASで感情分析API叩く
  --------------------------*/
  
  const API_KEY = PropertiesService.getScriptProperties().getProperty("senti_key");
//  ***debug***

  var content = "とってもいいホテルでした‼️全てのスタッフの方が笑顔で迎えてくれたので気持ちよく過ごす事ができました。"+"\n"+
                "温泉も時間が良かったのか露天風呂独り占めできたし、本当のんびりできました。"+"\n"+
                "朝食会場からの眺めは良かったです。晴れてないのが残念ですけどね〜また機会があれば泊まりたいです。";
  
  let obj = JSON.parse(analyzeSentiment(content, API_KEY));
  
//  ***debug***
//  console.log(json.documentSentiment.score);
//  console.log(json);

  return obj;
}


function doGet() {

let topPage = HtmlService.createTemplateFromFile("index");
return topPage.evaluate();
}


