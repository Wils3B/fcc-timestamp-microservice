const TimestampService = {
  getTimestamp(timestamp: string) {
    const date = `${Number(timestamp)}` === timestamp ? Number(timestamp) : timestamp;
    const parsedDate = new Date(date || Date.now());
    if (parsedDate.toString() === 'Invalid Date') {
      throw new Error('Invalid Date');
    }
    return {
      unix: parsedDate.getTime(),
      utc: parsedDate.toUTCString(),
    };
  },
};

export default TimestampService;
