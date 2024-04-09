function GroupsSelector({ faculties, facultyId, groupId, handleGroupChange }) {
  return (
    <label className="text-white">
      Група:
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={groupId}
        onChange={handleGroupChange}
      >
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
    </label>
  );
}

export default GroupsSelector;
