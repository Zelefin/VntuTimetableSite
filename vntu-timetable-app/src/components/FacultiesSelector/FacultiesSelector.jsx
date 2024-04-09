function FacultiesSelector({ faculties, facultyId, handleFacultyChange }) {
  return (
    <div className="flex items-center px-5 pt-4 pb-1">
      <label className="text-white inline-flex w-full items-center">
        Факультет:
        <select
          className="w-full mr-4 ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={facultyId}
          onChange={handleFacultyChange}
        >
          {faculties.length > 0 ? (
            faculties.map((faculty) => {
              return <option value={faculty.id}>{faculty.name}</option>;
            })
          ) : (
            <option>lol</option>
          )}
        </select>
      </label>
    </div>
  );
}

export default FacultiesSelector;
