var md5=require('md5');let Base64=require('js-base64').Base64;function endParams(str){if(uni.getStorageSync('landRegist')){let landRegistLG=JSON.parse(uni.getStorageSync('landRegist'));let paramStr=JSON.stringify(str);let base64Str=Base64.encode(paramStr);console.log(base64Str,'加密之后的数据Base64');console.log(Base64.decode(base64Str),'解密之后的数据Base64');let signStr=md5(base64Str+landRegistLG.randomKey);let endData={"object":base64Str,"sign":signStr};return JSON.stringify(endData);}}
export{endParams};