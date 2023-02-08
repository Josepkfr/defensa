import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/entities/auth.entity';
import { AsistsModule } from './asists/asists.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cfhisho2i3murc9lggg0-a.ohio-postgres.render.com',
      port: 5432,
      username: 'jose',
      password: 'VSixsgcwFUlesmMQSen7rFoH20mK2E2j',
      database: 'vinculacion',
      entities: [Auth],
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    AsistsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
