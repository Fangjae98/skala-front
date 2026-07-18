function bag() {
    
    var showMyBag = [
        { name: "여권 ✈️", count: 1 },
        { name: "스마트폰 📱", count: 1 },
        { name: "지갑 💳", count: 1 },
        { name: "노트북 💻", count: 1 },
        { name: "물 🧊", count: 3 },
    ];  // 물건 목록을 지정

    var resultText = "🎒 [내 가방 속 물품 목록]\n-----------------------\n";  // 출력할 텍스트 기본 세팅

    for (var i = 0; i < showMyBag.length; i++) {  // for 루프를 사용하여 배열의 길이만큼 반복
        resultText += showMyBag[i].name + "" + showMyBag[i].count + "개\n";  // 물건 이름과 개수를 출력 후 다음줄로 넘어감
    }

    resultText += "-----------------------\n 총 물품 종류: " + showMyBag.length + "가지";  // 총 물품 종류 출력

    alert(resultText);  // 알림으로 출력

}