Feature('Application Form');

//Login Sukses
Scenario('Login with Facebook-TC01', (I) => {
  I.amOnPage('/login');
  I.click('//*[@id="content"]/div/div/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/span/button');
  I.wait(5);
  I.amOnPage('https://www.facebook.com/login.php?skip_api_login=1&api_key=261539327577949&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df22e2bd98ff203%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff302b4eb36d1c28%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df368ad5f793dc%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff302b4eb36d1c28%2526relation%253Dopener%2526frame%253Df2252468642ae3c%26display%3Dpopup%26scope%3Demail%252Cpublic_profile%252Cuser_friends%252Cuser_actions.books%252Cuser_birthday%26response_type%3Dtoken%252Csigned_request%26domain%3Dkumparan.com%26origin%3D1%26client_id%3D261539327577949%26ret%3Dlogin%26sdk%3Djoey%26logger_id%3D3fdb2c11-8aa3-8fa3-9b15-5e2759df2938&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Df368ad5f793dc%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff302b4eb36d1c28%26relation%3Dopener%26frame%3Df2252468642ae3c%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26e2e%3D%257B%257D&display=popup&locale=en_GB&logger_id=3fdb2c11-8aa3-8fa3-9b15-5e2759df2938');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('//*[@id="email"]', 'gita.c.purba');
  I.fillField('//*[@id="pass"]', 'nasigoreng');
  I.click('//*[@id="u_0_0"]');
  I.wait(5);
  I.amOnPage('https://www.facebook.com/v2.7/dialog/oauth?channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Df22e2bd98ff203%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff302b4eb36d1c28%26relation%3Dopener&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Df368ad5f793dc%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff302b4eb36d1c28%26relation%3Dopener%26frame%3Df2252468642ae3c&display=popup&scope=email%2Cpublic_profile%2Cuser_friends%2Cuser_actions.books%2Cuser_birthday&response_type=token%2Csigned_request&domain=kumparan.com&origin=1&client_id=261539327577949&ret=login&sdk=joey&logger_id=3fdb2c11-8aa3-8fa3-9b15-5e2759df2938&ext=1523435423&hash=AebgNiA61ofy1tAk');
  I.click('//*[@id="u_0_4"]/div[2]/div[1]/div[1]/button');
  I.wait(5);
  I.amOnPage('https://kumparan.com/');
});

//Login dengan username yang salah
//Menemukan bug saat login dengan username facebook yang salah, tapi tetap bisa login ke kumparan
Scenario('Login with Facebook-TC02', (I) => {
  I.amOnPage('/login');
  I.click('//*[@id="content"]/div/div/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/span/button');
  I.wait(5);
  I.amOnPage('https://www.facebook.com/login.php?skip_api_login=1&api_key=261539327577949&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df22e2bd98ff203%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff302b4eb36d1c28%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df368ad5f793dc%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff302b4eb36d1c28%2526relation%253Dopener%2526frame%253Df2252468642ae3c%26display%3Dpopup%26scope%3Demail%252Cpublic_profile%252Cuser_friends%252Cuser_actions.books%252Cuser_birthday%26response_type%3Dtoken%252Csigned_request%26domain%3Dkumparan.com%26origin%3D1%26client_id%3D261539327577949%26ret%3Dlogin%26sdk%3Djoey%26logger_id%3D3fdb2c11-8aa3-8fa3-9b15-5e2759df2938&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Df368ad5f793dc%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff302b4eb36d1c28%26relation%3Dopener%26frame%3Df2252468642ae3c%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26e2e%3D%257B%257D&display=popup&locale=en_GB&logger_id=3fdb2c11-8aa3-8fa3-9b15-5e2759df2938');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('//*[@id="email"]', 'gita.c.purba123');
  I.fillField('//*[@id="pass"]', 'nasigoreng');
  I.click('//*[@id="u_0_0"]');
  I.wait(5);
  I.amOnPage('https://kumparan.com/');
});

//Login dengan password yang salah
Scenario('Login with Facebook-TC03', (I) => {
  I.amOnPage('/login');
  I.click('//*[@id="content"]/div/div/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/span/button');
  I.wait(5);
  I.amOnPage('https://www.facebook.com/login.php?skip_api_login=1&api_key=261539327577949&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df22e2bd98ff203%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff302b4eb36d1c28%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df368ad5f793dc%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff302b4eb36d1c28%2526relation%253Dopener%2526frame%253Df2252468642ae3c%26display%3Dpopup%26scope%3Demail%252Cpublic_profile%252Cuser_friends%252Cuser_actions.books%252Cuser_birthday%26response_type%3Dtoken%252Csigned_request%26domain%3Dkumparan.com%26origin%3D1%26client_id%3D261539327577949%26ret%3Dlogin%26sdk%3Djoey%26logger_id%3D3fdb2c11-8aa3-8fa3-9b15-5e2759df2938&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Df368ad5f793dc%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff302b4eb36d1c28%26relation%3Dopener%26frame%3Df2252468642ae3c%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26e2e%3D%257B%257D&display=popup&locale=en_GB&logger_id=3fdb2c11-8aa3-8fa3-9b15-5e2759df2938');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('//*[@id="email"]', 'gita.c.purba');
  I.fillField('//*[@id="pass"]', 'lalalala');
  I.click('//*[@id="u_0_0"]');
  
});

//Login dengan field username yang kosong
Scenario('Login with Facebook-TC04', (I) => {
  I.amOnPage('/login');
  I.click('//*[@id="content"]/div/div/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/span/button');
  I.wait(5);
  I.amOnPage('https://www.facebook.com/login.php?skip_api_login=1&api_key=261539327577949&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df22e2bd98ff203%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff302b4eb36d1c28%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df368ad5f793dc%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff302b4eb36d1c28%2526relation%253Dopener%2526frame%253Df2252468642ae3c%26display%3Dpopup%26scope%3Demail%252Cpublic_profile%252Cuser_friends%252Cuser_actions.books%252Cuser_birthday%26response_type%3Dtoken%252Csigned_request%26domain%3Dkumparan.com%26origin%3D1%26client_id%3D261539327577949%26ret%3Dlogin%26sdk%3Djoey%26logger_id%3D3fdb2c11-8aa3-8fa3-9b15-5e2759df2938&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Df368ad5f793dc%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff302b4eb36d1c28%26relation%3Dopener%26frame%3Df2252468642ae3c%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26e2e%3D%257B%257D&display=popup&locale=en_GB&logger_id=3fdb2c11-8aa3-8fa3-9b15-5e2759df2938');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('//*[@id="email"]', '');
  I.fillField('//*[@id="pass"]', 'nasigoreng');
  I.click('//*[@id="u_0_0"]');
  
});

//Login dengan field password yang kosong
Scenario('Login with Facebook-TC05', (I) => {
  I.amOnPage('/login');
  I.click('//*[@id="content"]/div/div/div/div[2]/div[2]/div/div[1]/div[2]/div[1]/span/button');
  I.wait(5);
  I.amOnPage('https://www.facebook.com/login.php?skip_api_login=1&api_key=261539327577949&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df22e2bd98ff203%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff302b4eb36d1c28%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df368ad5f793dc%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff302b4eb36d1c28%2526relation%253Dopener%2526frame%253Df2252468642ae3c%26display%3Dpopup%26scope%3Demail%252Cpublic_profile%252Cuser_friends%252Cuser_actions.books%252Cuser_birthday%26response_type%3Dtoken%252Csigned_request%26domain%3Dkumparan.com%26origin%3D1%26client_id%3D261539327577949%26ret%3Dlogin%26sdk%3Djoey%26logger_id%3D3fdb2c11-8aa3-8fa3-9b15-5e2759df2938&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Df368ad5f793dc%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff302b4eb36d1c28%26relation%3Dopener%26frame%3Df2252468642ae3c%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26e2e%3D%257B%257D&display=popup&locale=en_GB&logger_id=3fdb2c11-8aa3-8fa3-9b15-5e2759df2938');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('//*[@id="email"]', 'gita.c.purba');
  I.fillField('//*[@id="pass"]', '');
  I.click('//*[@id="u_0_0"]');
});

//Login Sukses
Scenario('Login with Gmail-TC06', (I) => {
  I.amOnPage('/login');
  I.click('//*[@id="content"]/div/div/div/div[2]/div[2]/div/div[1]/div[2]/div[2]/button/span');
  I.wait(5);
  I.amOnPage('https://accounts.google.com/signin/oauth?client_id=203797405389-ebvfbi965n9kis0qeg8h8mgq40fr5i7k.apps.googleusercontent.com&as=wp27gZyg0rvKRj6Ai4Lugw&destination=https://kumparan.com&approval_state=!ChRfR194NXdZSEJ0WXdkQzM1WF9sVhIfdzJnc25CV250Q1VXVU9xWmlfQjdtUjlFbVV3N0t4WQ%E2%88%99AB8iHBUAAAAAWs8RMDoKToUXUTnfxlXPdykucQlnz71N&xsrfsig=AHgIfE-7aUwtx4Ei2v6uGSFzn032s8T3lw');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('//*[@id="identifierId"]', 'gitachristyp1@gmail.com');
  I.click('//*[@id="identifierNext"]/content/span');
  I.wait(5);
  I.amOnPage('https://accounts.google.com/signin/v2/challenge/pwd?client_id=203797405389-ebvfbi965n9kis0qeg8h8mgq40fr5i7k.apps.googleusercontent.com&as=wp27gZyg0rvKRj6Ai4Lugw&destination=https%3A%2F%2Fkumparan.com&approval_state=!ChRfR194NXdZSEJ0WXdkQzM1WF9sVhIfdzJnc25CV250Q1VXVU9xWmlfQjdtUjlFbVV3N0t4WQ%E2%88%99AB8iHBUAAAAAWs8RMDoKToUXUTnfxlXPdykucQlnz71N&xsrfsig=AHgIfE-7aUwtx4Ei2v6uGSFzn032s8T3lw&flowName=GeneralOAuthFlow&TL=AHnYQLzj2rZ-poM52PedR-_couLjb0ZqDlaOx4WTPP2WQoQDQhaKbnqmkxan0HZg24sMJA4pDJjaMrtq-1li5p64DxzuYLLTFesmgyNnylojZVFvd4nI9Uvh67vCTsoccSHkB1omTz1dFyGU4LQoxTb78vy6GxyA2Q&cid=1&navigationDirection=forward')
  I.fillField('//*[@id="password"]/div[1]/div/div[1]/input', 'P2hasian');
  I.click('//*[@id="passwordNext"]/content/span')
  I.wait(5);
  I.amOnPage('https://kumparan.com/');

});

//Login dengan username salah
Scenario('Login with Gmail-TC07', (I) => {
  I.amOnPage('/login');
  I.click('//*[@id="content"]/div/div/div/div[2]/div[2]/div/div[1]/div[2]/div[2]/button/span');
  I.wait(5);
  I.amOnPage('https://accounts.google.com/signin/oauth?client_id=203797405389-ebvfbi965n9kis0qeg8h8mgq40fr5i7k.apps.googleusercontent.com&as=wp27gZyg0rvKRj6Ai4Lugw&destination=https://kumparan.com&approval_state=!ChRfR194NXdZSEJ0WXdkQzM1WF9sVhIfdzJnc25CV250Q1VXVU9xWmlfQjdtUjlFbVV3N0t4WQ%E2%88%99AB8iHBUAAAAAWs8RMDoKToUXUTnfxlXPdykucQlnz71N&xsrfsig=AHgIfE-7aUwtx4Ei2v6uGSFzn032s8T3lw');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('//*[@id="identifierId"]', 'gitachristyp@gmail.com');
  I.click('//*[@id="identifierNext"]/content/span');
  I.wait(5);
  I.amOnPage('https://accounts.google.com/signin/v2/challenge/pwd?client_id=203797405389-ebvfbi965n9kis0qeg8h8mgq40fr5i7k.apps.googleusercontent.com&as=wp27gZyg0rvKRj6Ai4Lugw&destination=https%3A%2F%2Fkumparan.com&approval_state=!ChRfR194NXdZSEJ0WXdkQzM1WF9sVhIfdzJnc25CV250Q1VXVU9xWmlfQjdtUjlFbVV3N0t4WQ%E2%88%99AB8iHBUAAAAAWs8RMDoKToUXUTnfxlXPdykucQlnz71N&xsrfsig=AHgIfE-7aUwtx4Ei2v6uGSFzn032s8T3lw&flowName=GeneralOAuthFlow&TL=AHnYQLzj2rZ-poM52PedR-_couLjb0ZqDlaOx4WTPP2WQoQDQhaKbnqmkxan0HZg24sMJA4pDJjaMrtq-1li5p64DxzuYLLTFesmgyNnylojZVFvd4nI9Uvh67vCTsoccSHkB1omTz1dFyGU4LQoxTb78vy6GxyA2Q&cid=1&navigationDirection=forward')
  I.fillField('//*[@id="password"]/div[1]/div/div[1]/input', 'P2hasian');
  I.click('//*[@id="passwordNext"]/content/span')

});


//Login dengan password salah
Scenario('Login with Gmail-TC08', (I) => {
  I.amOnPage('/login');
  I.click('//*[@id="content"]/div/div/div/div[2]/div[2]/div/div[1]/div[2]/div[2]/button/span');
  I.wait(5);
  I.amOnPage('https://accounts.google.com/signin/oauth?client_id=203797405389-ebvfbi965n9kis0qeg8h8mgq40fr5i7k.apps.googleusercontent.com&as=wp27gZyg0rvKRj6Ai4Lugw&destination=https://kumparan.com&approval_state=!ChRfR194NXdZSEJ0WXdkQzM1WF9sVhIfdzJnc25CV250Q1VXVU9xWmlfQjdtUjlFbVV3N0t4WQ%E2%88%99AB8iHBUAAAAAWs8RMDoKToUXUTnfxlXPdykucQlnz71N&xsrfsig=AHgIfE-7aUwtx4Ei2v6uGSFzn032s8T3lw');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('//*[@id="identifierId"]', 'gitachristyp1@gmail.com');
  I.click('//*[@id="identifierNext"]/content/span');
  I.wait(5);
  I.amOnPage('https://accounts.google.com/signin/v2/challenge/pwd?client_id=203797405389-ebvfbi965n9kis0qeg8h8mgq40fr5i7k.apps.googleusercontent.com&as=wp27gZyg0rvKRj6Ai4Lugw&destination=https%3A%2F%2Fkumparan.com&approval_state=!ChRfR194NXdZSEJ0WXdkQzM1WF9sVhIfdzJnc25CV250Q1VXVU9xWmlfQjdtUjlFbVV3N0t4WQ%E2%88%99AB8iHBUAAAAAWs8RMDoKToUXUTnfxlXPdykucQlnz71N&xsrfsig=AHgIfE-7aUwtx4Ei2v6uGSFzn032s8T3lw&flowName=GeneralOAuthFlow&TL=AHnYQLzj2rZ-poM52PedR-_couLjb0ZqDlaOx4WTPP2WQoQDQhaKbnqmkxan0HZg24sMJA4pDJjaMrtq-1li5p64DxzuYLLTFesmgyNnylojZVFvd4nI9Uvh67vCTsoccSHkB1omTz1dFyGU4LQoxTb78vy6GxyA2Q&cid=1&navigationDirection=forward')
  I.fillField('//*[@id="password"]/div[1]/div/div[1]/input', 'P2hasiann');
  I.click('//*[@id="passwordNext"]/content/span')

});


//Menambahkan Komentar pada News Sukses
Scenario('Menambah komentar-TC09', (I) => {
  I.amOnPage('/');
  I.click('//*[@id="content"]/div/div/div/nav/div/div/ul/li[2]/a');
  I.wait(5);
  I.amOnPage('/topic/news/terkini');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[39]/div/div/div[2]/a[2]/h4');
  I.wait(5);
  I.fillField('//*[@id="newCommentTextArea"]', 'test');
  I.wait(5);
  I.click('//*[@id="content"]/div/div/div/div/div[2]/div/div/div[1]/div/div[2]/div[3]/div/div[1]/div/div/div/div/div/div/div[2]/div[3]/button')
  
});

//Menambahkan Komentar pada News dengan field komentar kosong
Scenario('Menambah komentar-TC09', (I) => {
  I.amOnPage('/');
  I.click('//*[@id="content"]/div/div/div/nav/div/div/ul/li[2]/a');
  I.wait(5);
  I.amOnPage('https://kumparan.com/topic/news/terkini');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[39]/div/div/div[2]/a[2]/h4');
  I.wait(5);
  I.fillField('//*[@id="newCommentTextArea"]', '');
  I.click('//*[@id="content"]/div/div/div/div/div[2]/div/div/div[1]/div/div[2]/div[3]/div/div[1]/div/div/div/div/div/div/div[2]/div[3]/button/span')
});

//Menyukai berita Sukses
Scenario('Like News-TC10', (I) => {
  I.amOnPage('/');
  I.click('/html/body/div[2]/div/div/div/div/div/div[2]/div[2]/div/div[1]/div/div/div[2]/div/div[2]/div[1]/button');
  I.wait(5);
 
});

//Melakukan Pencarian dengan kata atau kalimat
Scenario('Mencari Berita-TC11', (I) => {
  I.amOnPage('/topic/news/terkini');
  I.fillField('Search','politik jaya');
  I.click('//*[@id="content"]/div/div/div/nav/div/div/div/div[2]/div/div/button/i');
  I.wait(5);
  I.amOnPage('https://kumparan.com/search/politik%20jaya');
});

//Melakukan Pencarian dengan angka
Scenario('Mencari Berita-TC12', (I) => {
  I.amOnPage('/topic/news/terkini');
  I.fillField('Search','012345');
  I.click('//*[@id="content"]/div/div/div/nav/div/div/div/div[2]/div/div/button/i');
  I.wait(5);
  I.amOnPage('https://kumparan.com/search/012345');
});

//Melakukan Pencarian dengan simbol
Scenario('Mencari Berita-TC13', (I) => {
  I.amOnPage('/topic/news/terkini');
  I.fillField('Search','.');
  I.click('//*[@id="content"]/div/div/div/nav/div/div/div/div[2]/div/div/button/i');
  I.wait(5);
  I.amOnPage('https://kumparan.com/search/.');
});

//Menambah Story Sukses
Scenario('Create Story-TC14', (I) => {
  I.amOnPage('/');
  I.click('//*[@id="content"]/div/div/div/div/nav/div/div/div/ul/li[7]/a/span/i');
  I.wait(5);
  I.amOnPage('https://kumparan.com/create-story');
  I.fillField('Story Title','Seni Indah');
  I.fillField('//*[@id="content"]/div/div/div/div/div/div/div/div[1]/div/div[3]/div[2]/div/div/div[2]/div/div/div/div','Seni itu memang sangat indah hehe');
  I.fillField('Add a topic','Seni');
  I.click('//*[@id="stick-createstory"]/button/span');
  I.wait(5);
  I.click('/html/body/div[4]/div/div[2]/div/div/div[2]/button');
  I.wait(5);
  I.amOnPage('https://kumparan.com/gita-christy-purba/sdsd-1523443381014');
});

//Mengedit Story Sukses
Scenario('Edit Story-TC15', (I) => {
  I.amOnPage('/gita-christy-purba/sdsd-1523443381014');
  I.click('//*[@id="content"]/div/div/div/div/div[2]/div/div/div[1]/div/div[2]/div[2]/div[2]/button[1]');
  I.wait(5);
  I.amOnPage('https://kumparan.com/create-story/27431110790464741');
  I.fillField('Story Title','Seni Bagus');
  I.fillField('//*[@id="content"]/div/div/div/div/div/div/div/div[1]/div/div[3]/div[2]/div/div/div[2]/div/div/div/div','Seni itu memang sangat bagus');
  I.fillField('Add a topic','SeniBagus');
  I.click('//*[@id="stick-createstory"]/button/span');
  I.wait(5);
  I.click('/html/body/div[4]/div/div[2]/div/div/div[2]/button');
  I.wait(5);
  I.amOnPage('https://kumparan.com/gita-christy-purba/sdsd-1523443381014');
});

//Menghapus Story Sukses
Scenario('Hapus Story-TC16', (I) => {
  I.amOnPage('/gita-christy-purba/sdsd-1523443381014');
  I.click('//*[@id="content"]/div/div/div/div/div[2]/div/div/div[1]/div/div[2]/div[2]/div[2]/button[2]');
  I.wait(5);
  I.click('/html/body/div[4]/div/div[2]/div/div/div[3]/button[2]');
  I.amOnPage('https://kumparan.com');
});

//Menyertakan gambar pada komentar tanpa login
Scenario('Memberi komentar-TC17', (I) => {
  I.amOnPage('/@kumparank-pop/response/twice-siap-gelar-konser-twiceland-zone-2-di-indonesia');
  I.fillField('Tulis Komentarmu', 'Kpop luar biasa');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div[1]/div/input');
  I.wait(5);
  I.click('//*[@id="content"]/div/div/div/div/div/div/div/div[1]/div[1]/div[3]/div/div/div/div/div/div[1]/div[2]/div/div[2]/button/span');
  I.wait(5);
  I.amOnPage('https://kumparan.com/login');
  I.click('//*[@id="content"]/div/div/div/div[2]/div[2]/div/div[1]/div[2]/div[2]/button/span');
  I.wait(5);
  I.amOnPage('/@kumparank-pop/response/twice-siap-gelar-konser-twiceland-zone-2-di-indonesia');
});

//Menyertakan gambar pada komentar Sukses
Scenario('Memberi komentar-TC18', (I) => {
  I.amOnPage('/@kumparank-pop/response/twice-siap-gelar-konser-twiceland-zone-2-di-indonesia');
  I.fillField('Tulis Komentarmu', 'Kpop luar biasa');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div[1]/div/input');
  I.wait(5);
  I.click('//*[@id="content"]/div/div/div/div/div/div/div/div[1]/div[1]/div[3]/div/div/div/div/div/div[1]/div[2]/div/div[2]/button/span');
  I.wait(5);
  I.amOnPage('/@kumparank-pop/response/twice-siap-gelar-konser-twiceland-zone-2-di-indonesia');
});

//Menyertakan gambar pada komentar dengan mengupload 'bukan' file gambar
Scenario('Memberi komentar-TC19', (I) => {
  I.amOnPage('/@kumparank-pop/response/twice-siap-gelar-konser-twiceland-zone-2-di-indonesia');
  I.fillField('Tulis Komentarmu', 'Kpop luar biasa');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div[1]/div/input');
  I.wait(5);
  I.click('//*[@id="content"]/div/div/div/div/div/div/div/div[1]/div[1]/div[3]/div/div/div/div/div/div[1]/div[2]/div/div[2]/button/span');
});

//Menyertakan attachment dengan url yang benar pada komentar
Scenario('Memberi komentar-TC20', (I) => {
  I.amOnPage('/@kumparank-pop/response/twice-siap-gelar-konser-twiceland-zone-2-di-indonesia');
  I.fillField('Tulis Komentarmu', 'Kpop luar biasa');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div[1]/button/i');
  I.wait(5);
  I.fillField('Masukkan link/URL', 'instagram.com/gitachristyp');
  I.click('/html/body/div[4]/div/div[2]/div/div/div[3]/button/span');
  I.wait(5);
  I.click('//*[@id="content"]/div/div/div/div/div/div/div/div[1]/div[1]/div[3]/div/div/div/div/div/div[1]/div[2]/div/div[2]/button/span');
  I.wait(5);
  I.amOnPage('/@kumparank-pop/response/twice-siap-gelar-konser-twiceland-zone-2-di-indonesia');
});

//Menyertakan attachment dengan url yang salah pada komentar
Scenario('Memberi komentar-TC21', (I) => {
  I.amOnPage('/@kumparank-pop/response/twice-siap-gelar-konser-twiceland-zone-2-di-indonesia');
  I.fillField('Tulis Komentarmu', 'Kpop luar biasa');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div[1]/button/i');
  I.wait(5);
  I.fillField('Masukkan link/URL', 'terserahhhh.com');
});

//Membagikan Berita dengan Facebook
Scenario('Membagikan Berita-TC22', (I) => {
  I.amOnPage('/topic/news/terkini');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[3]/div/div/div[2]/div/div[2]/div[3]/div/button/i');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[3]/div/div/div[2]/div/div[2]/div[3]/div/ul/li[1]/button');
  I.wait(5);
  I.amOnPage('https://web.facebook.com/sharer/sharer.php?u&ret=login');
  I.click('//*[@id="u_0_0"]/div[2]/div/button');
});

//Membagikan Berita dengan Twitter
Scenario('Membagikan Berita-TC23', (I) => {
  I.amOnPage('/topic/news/terkini');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[3]/div/div/div[2]/div/div[2]/div[3]/div/button/i');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[3]/div/div/div[2]/div/div[2]/div[3]/div/ul/li[2]/button');
  I.wait(5);
  I.amOnPage('https://twitter.com/intent/tweet?text=Rocky%20Gerung%20Dilaporkan%20ke%20Polisi%20Atas%20Ucapan%20Kitab%20Suci%20Fiksi%20di%20ILC&url=');
  I.click('//*[@id="update-form"]/div[3]/fieldset/input');
});

//Membagikan Berita dengan Google
Scenario('Membagikan Berita-TC24', (I) => {
  I.amOnPage('/topic/news/terkini');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[3]/div/div/div[2]/div/div[2]/div[3]/div/button/i');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[3]/div/div/div[2]/div/div[2]/div[3]/div/ul/li[3]/button');
  I.wait(5);
  I.amOnPage('https://plus.google.com/share?text=Rocky%20Gerung%20Dilaporkan%20ke%20Polisi%20Atas%20Ucapan%20Kitab%20Suci%20Fiksi%20di%20ILC&url=https://kumparan.com/@kumparannews/rocky-gerung-dilaporkan-ke-polisi-atas-ucapan-kitab-suci-fiksi-di-ilc');
  I.click('//*[@id="yDmH0d"]/c-wiz/div[4]/div/c-wiz/c-wiz/content/div[2]/div[4]/content/span');
});

//Membagikan Berita dengan Linkedin
Scenario('Membagikan Berita-TC25', (I) => {
  I.amOnPage('/topic/news/terkini');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[3]/div/div/div[2]/div/div[2]/div[3]/div/button/i');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[3]/div/div/div[2]/div/div[2]/div[3]/div/ul/li[4]/button');
  I.wait(5);
  I.amOnPage('https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fkumparan.com%2F%40kumparannews%2Frocky-gerung-dilaporkan-ke-polisi-atas-ucapan-kitab-suci-fiksi-di-ilc');
  I.click('//*[@id="yui-gen4"]/div[3]/input');
});

//Membagikan Berita dengan Post This to My Timeline
Scenario('Membagikan Berita-TC26', (I) => {
  I.amOnPage('/topic/news/terkini');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[3]/div/div/div[2]/div/div[2]/div[3]/div/button/i');
  I.click('//*[@id="content"]/div/div/div/div/div/div/div[2]/div/div[2]/div/div/div[3]/div/div/div[2]/div/div[2]/div[3]/div/ul/li[5]/button');
  I.wait(5);
  I.click('/html/body/div[4]/div/div[2]/div/div/div[3]/button[2]/span');
  I.wait(5);
  
});

Feature('Stop me', {timeout:5000});
