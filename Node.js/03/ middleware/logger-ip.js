// 사용자가 접속하면 사용자의 IP 주소를 로그로 남기는 미들웨어 작성
// 미들웨어로 사용될 함수
export function checkIp(req, res, next){
    const ip = req.ip;
    console.log(ip);
    next();
}
