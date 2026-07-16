function upDown() {

    var computerNum = Math.floor(Math.random() * 50) + 1;  // 무작위 숫자 생성 코드
    var count = 0;  // 도전 횟수 카운트
    let Input;  // 사용자 입력값 변수

    while (true) {

        Input = prompt("1부터 50 사이의 숫자를 입력하세요:");  // prompt('안내 문구')
        console.log(Input);  // 입력값 확인용

        if (Input === null || Input.trim() === "") {
            alert("게임을 종료합니다.");  // 사용자가 취소 버튼을 누르거나 입력값이 비어있으면 게임 종료
            break;  // break;는 반복문을 종료하는 명령어 -> 완전 종료
        }
        Input = Number(Input);  // 입력값을 숫자로 변환, 이전에 위치할 경우 문자도 숫자로 인식함

        if (Input < 1 || Input > 50) {
            alert("1부터 50 사이의 숫자를 입력하세요:");
            continue;
        }  // 1. 범위 밖 숫자를 입력할 경우 카운트 하지 않고, 범위 내 숫자를 입력하도록 안내

        if (isNaN(Input)) {
            alert("올바른 입력이 아닙니다! 1 ~ 50 사이의 숫자를 입력해 주세요.");
            continue;
        }  // 2. 입력값이 숫자가 아닌 경우, 올바른 입력 안내 + 카운트 증가하지 않음

        count++;  // 도전 횟수 카운트 증가, 범위 밖 숫자를 입력할 경우 카운트하지 않음
        if (Input > computerNum) {
            alert("더 작은 숫자를 입력하세요:");
        }  // 3. 입력값이 임의의 숫자보다 큰 경우, 더 작은 숫자를 입력하도록 안내 + 카운트 증가
        else if (Input < computerNum) {
            alert("더 큰 숫자를 입력하세요:");
        }  // 4. 입력값이 임의의 숫자보다 작은 경우, 더 큰 숫자를 입력하도록 안내 + 카운트 증가
        else {
            alert("정답입니다! 축하합니다!\n도전 횟수: " + count + "번 만에 맞추셨습니다~!");
            break;  
        }  // 5. 입력값이 임의의 숫자와 일치하는 경우, 정답 안내 + 카운트 증가 + 게임 종료

    }

}