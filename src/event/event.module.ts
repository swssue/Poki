import { Module } from '@nestjs/common';
import { EventGateway } from './event.gateway';
import { EventService } from './event.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConversationRepository } from './repository/conversation.repository';
import { MessageRepository } from './repository/message.repository';
import { EventController } from './event.controller';
import { AuthModule } from 'src/auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { UserRepository } from 'src/auth/user.repository';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            ConversationRepository,
            MessageRepository,
            UserRepository,
        ]),
        AuthModule,
    ],
    providers: [
        EventGateway, 
        EventService,
        ConversationRepository,
        MessageRepository,
        UserRepository,
        JwtService,
        AuthService,
        JwtStrategy,],
    controllers: [EventController],
    exports: [EventGateway, EventService, TypeOrmModule],
})

export class EventModule {}
