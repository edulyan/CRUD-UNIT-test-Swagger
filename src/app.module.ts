import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigPG } from './config/typeOrm.config';
import { UserModule } from './user/user.module';

@Module({
  controllers: [],
  providers: [],
  imports: [TypeOrmModule.forRoot(ConfigPG), UserModule],
})
export class AppModule {}
