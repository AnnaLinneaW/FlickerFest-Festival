import TicketData from '@/types/tickets';

const postData = async (ticketData: TicketData) => {
  try {
    const response = await fetch('http://localhost:3001/buyTickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticketData),
    });

    if (!response.ok) {
      throw new Error('Post request failed');
    }

    const data = await response.json();
    console.log(data);
  } catch (error: any) {
    console.error('Error:', error.message);
  }
};

export default postData;
