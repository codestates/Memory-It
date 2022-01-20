import { Request, Response, NextFunction } from 'express'

const beforeLogin = (req: Request, res: Response, next: NextFunction) => {
  // ? 직전 미들웨어에서 모든 GET요청에 대해 토큰소지여부를 확인하고 토큰이 없으면 로그인되지 않은 것으로 간주하고 index페이지로 리다이렉트 시킨다.
  // ? 이 과정에서 백엔드에서는 (로그인전)index페이지에서 보여줄 정보들을 바디에 담아주게된다.
  // ? 그러니 라우팅이 들어가는 모든 페이지에서 GET요청을 먼저 보내줘야함. 해당부분은 프론트와 상의가 필요함.
  console.log('만약 엑세스, 리프레시 토큰 둘다없다면 이 문구를 보게됨.')
  res.send('로그인전에 보여줄 내용들..')
}

export default beforeLogin
