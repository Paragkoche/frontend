// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer"
type Data = {
    name: string
}
const tranf = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        pass: 'uyzxiyuoykbxrlav',
        user: 'praveenbhagavatula4@gmail.com'
    }
})
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") res.send("not Post method")
    const { email } = req.body;
    console.log(email);

    tranf.sendMail({
        from: 'praveenbhagavatula4@gmail.com',
        to: 'mr.gbjbuzz@gmail.com',
        text: `email :${email}: is request to newsletter`
    })
    res.send("ok")
}
