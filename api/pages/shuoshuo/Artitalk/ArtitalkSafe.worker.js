{"title":"","uid":"1cd19fc71517798e2fa5b7457d1fb06e","text":"//此脚本由MHuiG - MiniValine写成，ChenYFan将其做少量修改制成，此脚本仅适用于Artitalk async function handleRequest(event) { AppId = (function () { try { return APPID...","date":"2022-10-20T22:05:27.362Z","updated":"2022-10-20T22:05:27.362Z","comments":true,"path":"api/pages/shuoshuo/Artitalk/ArtitalkSafe.worker.js","covers":null,"excerpt":"","content":"<link rel=\"stylesheet\" class=\"aplayer-secondary-style-marker\" href=\"/assets/css/APlayer.min.css\"><script src=\"/assets/js/APlayer.min.js\" class=\"aplayer-secondary-script-marker\"></script>//此脚本由MHuiG - MiniValine写成，ChenYFan将其做少量修改制成，此脚本仅适用于Artitalk\n\nasync function handleRequest(event) {\n  AppId = (function () { try { return APPID } catch (e) { return \"\" } })()\n  AppKey = (function () { try { return APPKEY } catch (e) { return \"\" } })()\n  if (AppId == \"\" || AppKey == \"\") { return new Response('Artitalk-Safe异常：您没有设定appid和appkey') }\n  ServerDomain = (function () { try { return SERVERDOMAIN } catch (e) { return `${(AppId.substr(0, 8)).toLowerCase()}.api.lncldglobal.com` } })()\n  atComment = (function () { try { return ATCOMMENT == \"true\" ? true : false } catch (e) { return true } })()\n  CORS = (function () { try { return CORS } catch (e) { return '*' } })()\n  const request = event.request\n  const url = new URL(request.url)\n  const urlObj = new URL(url)\n  const path = urlObj.href.substr(urlObj.origin.length)\n  const classac = l(rp(path).split('/'))\n  if (classac == \"atComment\" && !atComment) { return new Response('{\"code\":101,\"error\":\"Artitalk-Safe：评论功能未开启\"}', { headers: { \"content-type\": \"application/json;charset=utf-8\" } }) }\n  if (classac == \"_File\" || classac == \"_Followee\" || classac == \"_Follower\" || classac == \"_Installation\" || classac == \"_Role\") { return new Response('{\"code\":101,\"error\":\"Artitalk-Safe：操作是禁止的\"}', { headers: { \"content-type\": \"application/json;charset=utf-8\" } }) }\n\n  url.hostname = ServerDomain\n  reqHEDNew = new Headers(request.headers)\n  if (reqHEDNew.get(\"X-LC-Id\")) {\n    reqHEDNew.set(\"X-LC-Id\", AppId)\n    reqHEDNew.set(\"X-LC-Key\", AppKey)\n  }\n  if (reqHEDNew.get(\"x-lc-sign\")) {\n    reqHEDNew.delete(\"X-LC-Sign\")\n  }\n  reqNew = new Request(request, { headers: reqHEDNew })\n  responsefetch = await fetch(url.toString(), reqNew)\n  resHEDNew = new Headers(responsefetch.headers)\n  resHEDNew.set(\"Access-Control-Allow-Origin\", CORS)\n  response = new Response(responsefetch.body, { headers: resHEDNew })\n  return response\n}\nfunction rp(p) {\n  return p.split(\"?\")[0]\n}\nfunction l(p) {\n  return p[getJsonLength(p) - 1]\n}\n\n\nfunction getJsonLength(jsonData) {\n\n  var jsonLength = 0;\n\n  for (var item in jsonData) {\n\n    jsonLength++;\n\n  }\n\n  return jsonLength;\n}\naddEventListener(\"fetch\", event => {\n  event.respondWith(handleRequest(event))\n})\n","count_time":{"symbolsCount":"2.2k","symbolsTime":"2 mins."},"toc":""}