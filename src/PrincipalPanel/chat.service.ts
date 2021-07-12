import {get} from '../utils/httpUtils';

export const chatService = {

    findChatMessages: (senderId: number, recipientId: number) => get(`/api/messages/${senderId}/${recipientId}`),
}