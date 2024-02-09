const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1>Person Name's Todos</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="avatar"
      src={baseUrl + person.imageId + person.imageSize + '.jpg'}
      //      src={`${baseUrl} ${person.imageId} ${person.imageSize} ${'.jpg'}`}
      alt={person.name}
      />
    </div>
  );
}
