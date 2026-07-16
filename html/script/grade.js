function grade() {

    var subjects = ["HTML", "CSS", "JavaScript"];  // 과목들을 배열로 선언
    var total = 0;  // 점수 총합을 저장할 변수 지정

    for (var i = 0; i < subjects.length; i++) {  // 과목 차례로 입력받음 (HTML -> CSS -> JS)
        
        var score; // 사용자가 입력한 과목 별 점수를 보관할 변수

        while (true) {
            var Input = prompt(subjects[i] + " 점수를 입력해 주세요. (0 ~ 100)");  // 사용자에게 점수를 입력 받음

            if (Input === null) {
                alert("성적 입력을 취소합니다.");
                return;  // 취소 버튼을 누르면 함수 종료합니다.
            }

            score = Number(Input);  // 사용자가 입력한 값을 숫자로 변환합니다.

            if (isNaN(score) || score < 0 || score > 100 || Input.trim() === "") {
                alert("0 ~ 100 사이의 올바른 숫자를 입력해 주세요.");
                continue;  // while문을 다시 실행
            }  // 입력된 값이 올바르지 않으면(숫자가 아님, 영역을 벗어남, 빈칸 입력) 다시 입력받습니다.
            
            break;  // 올바른 점수가 입력되면 이 while문을 탈출하고 다음 과목(for문)으로 넘어갑니다.
        }

        total += score;  // 입력 받은 점수들을 더함

    }

    var average = total / subjects.length;  // 총점/과목 개수
    var result = "";  // 결과 출력용 변수

    if (average >= 60) {
        result = "합격입니다 🎉 과목 수료를 축하합니다~!";
    } else {
        result = "불합격입니다 ❌ 다음 기회에 힘내세요!";
    }  // 평균 점수 60점 이상이면 합격, 그 외의 경우 불합격

    alert(
        "====== 📊 성적 결과표 ======\n" +
        "• 총점: " + total + "점\n" +
        "• 평균: " + average.toFixed(1) + "점\n" +
        "---------------------------\n" +
        "• 결과: " + result
    );  // 결과 알림(평균 점수는 소수점 첫째 자리까지만 표시)

}