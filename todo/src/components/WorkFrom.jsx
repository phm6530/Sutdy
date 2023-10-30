export default function WorkForm({ onAddWork, value, onValueChange }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddWork(value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => onValueChange(e.target.value)} />
        <button type="submit">추가하기</button>
      </form>
    );
  }