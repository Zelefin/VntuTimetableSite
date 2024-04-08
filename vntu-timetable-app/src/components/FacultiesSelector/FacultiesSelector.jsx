function FacultiesSelector({ faculties, facultyId, handleFacultyChange }) {
  return (
    <select value={facultyId} onChange={handleFacultyChange}>
      {faculties.length > 0 ? (
        faculties.map((faculty) => {
          return <option value={faculty.id}>{faculty.name}</option>;
        })
      ) : (
        <option>lol</option>
      )}
    </select>
  );
}

export default FacultiesSelector;
