import {useCallback} from 'react';
import {io, Socket} from 'socket.io-client';

let socket: Socket | undefined;
const useSocket = (): [Socket | undefined, () => void] => {
  const disconnect = useCallback(() => {
    if (socket) {
      socket.disconnect();
      socket = undefined;
    }
  }, []);
  if (!socket) {
    socket = io('10.0.2.2:3105', {
      transports: ['websocket'],
    });
  }
  return [socket, disconnect];
};

export default useSocket;