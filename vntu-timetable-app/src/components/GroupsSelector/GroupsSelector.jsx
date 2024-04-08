function GroupsSelector({ faculties, facultyId, groupId, handleGroupChange }) {
  return (
    <select value={groupId} onChange={handleGroupChange}>
      {faculties.length > 0 ? (
        faculties
          .find((faculty) => faculty.id === facultyId)
          ["groups"].map((group) => {
            return <option value={group.id}>{group.name}</option>;
          })
      ) : (
        <option>lol</option>
      )}
    </select>
  );
}

export default GroupsSelector;
