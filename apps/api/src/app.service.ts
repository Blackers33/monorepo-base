import { Injectable } from '@nestjs/common'
import { getHelloWorld } from '@workspace/shared-utils'

@Injectable()
export class AppService {
  getState() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      message: getHelloWorld(),
    } as const
  }
}
