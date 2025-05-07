import { Controller } from '../decorators/controller.decorator';
import { Post } from '../decorators/methods/post-method.decorator';
import { Patch } from '../decorators/methods/patch-method.decorator';
import { HttpCode } from '../decorators/status/http-status.decorator';
import { Req } from '../decorators/parameters/req-param.decorator';
import { Param } from '../decorators/parameters/param-parameter.decorator';
import { Body } from '../decorators/parameters/body-parameter.decorator';
import { Headers } from '../decorators/parameters/headers-parameter.decorator';

@Controller('/auth')
export class AuthController {
  @Post('/login/:id')
  @HttpCode(200)
  login(
    @Req() req: Request,
    @Param() param: { id: string },
    @Headers() headers: { authentication: string },
    @Body('fullName') fullName: string,
    @Param('id') id: string
  ) {
    return {
      msg: 'Nest ? Or Express ?',
      data: {
        req,
        id,
        param,
        fullName,
        headers,
      },
    };
  }

  @Patch('/update')
  update() {}
}
