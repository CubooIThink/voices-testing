// ... (previous code)

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (data) => {
    io.emit('chat message', data);
  });

  socket.on('change name', (newName) => {
    io.emit('change name', newName);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// ... (remaining code)
