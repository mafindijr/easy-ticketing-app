import DetailCard from './Cards';

const cardData = [
  { title: 'Card 1', summary: 'Short summary 1', details: 'Detailed information 1' },
  { title: 'Card 2', summary: 'Short summary 2', details: 'Detailed information 2' },
  // Add more cards as needed
];

export default function CardsList() {
  return (
    <div className=''>
      {cardData.map((card, idx) => (
        <DetailCard key={idx} {...card} />
      ))}
    </div>
  );
}