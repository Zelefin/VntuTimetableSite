function GroupsSelector({ faculties, facultyId, groupId, handleGroupChange }) {
  return (
    <div className="flex justify-between px-5 py-1">
      <label className="text-white inline-flex w-full items-center">
        Група:
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 max-w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            <></>
          )}
        </select>
      </label>
    </div>
  );
}

export default GroupsSelector;
