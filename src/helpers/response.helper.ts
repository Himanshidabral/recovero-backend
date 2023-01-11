import { ResInterface } from "../interfaces/request.interface";

class ResponseHelper{

    public async ok(res:ResInterface,statusText:any,message:any,data:any){
        res.status(200).json({status:200,statusText:statusText??'SUCCESS',message:message,data:data})
    }

    public async badRequest(res: any, statusText: string, message: any, data: any = {}) {

        res.status(400).json({ status: 400, statusText: statusText ? statusText : 'BAD_REQUEST', message: message, data: data })
    }
    public async notAcceptable(res: any, statusText: string, message: any, data: any = {}) {
        res.status(406).json({ status: 406, statusText: statusText ? statusText : 'NOT_ACCEPTABLE', message: message, data: data })
    }

    public async conflict(res: any, statusText: string, message: any, data: any = {}) {

        res.status(409).json({ status: 409, statusText: statusText ? statusText : 'CONFLICT', message: message, data: data })
    }

    public async noContent(res: any, statusText: string, message: any, data: any = {}) {
        res.status(200).json({ status: 205, statusText: statusText ? statusText : '', message: message ? message : "Un-authenticated Request!", data: data })
    }
    public async unAuthenticated(res: any, statusText: string, message: any = null, data: any = {}) {

        res.status(401).json({ status: 401, statusText: statusText ? statusText : 'UNAUTHORIZE', message: message ? message : "Un-authenticated Request!", data: data })
    }

    public async unAuthorize(res: any, statusText: string, message: any = null, data: any = {}) {

        res.status(403).json({ status: 403, statusText: statusText ? statusText : 'UNAUTHORIZE', message: message ? message : "Un-authenticated Request!", data: data })
    }

    public async serverError(res: any, message: string = null, data: any = {}) {

        res.status(500).json({ status: 500, message: message ? message : "Internal Server Error!", data: data })
    }

    public async created(res: any, statusText: string, message: any = null, data: any = {}) {

        res.status(201).json({ status: 201, statusText: statusText ? statusText : 'CREATED', message: message ? message : "created!", data: data })
    }

    public async acceptanceRequired(res: any, statusText: string, message: any = null, data: any = {}) {
        res.status(406).json({ status: 406, statusText: statusText ? statusText : 'FAILED', message: message ? message : "created!", data: data })
    }



}


export default new ResponseHelper();