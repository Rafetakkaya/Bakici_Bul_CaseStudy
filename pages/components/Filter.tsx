
type FilterProps = {
  statusFilter: string | null;
  genderFilter: string | null;
  setStatusFilter: (status: string | null) => void;
  setGenderFilter: (gender: string | null) => void;
};

export default function Filter({
  statusFilter,
  genderFilter,
  setStatusFilter,
  setGenderFilter,
}: FilterProps) {
  return (
    <div className="flex gap-4 mb-4 justify-start mt-4">
      <div>
        <label className="block font-bold text-gray-200">Status</label>
        <select
          value={statusFilter || ''}
          onChange={(e) => setStatusFilter(e.target.value || null)}
          className="p-2 rounded bg-gray-800 text-white border border-gray-600"
        >
          <option value="">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div>
        <label className="block font-bold text-gray-200">Gender</label>
        <select
          value={genderFilter || ''}
          onChange={(e) => setGenderFilter(e.target.value || null)}
          className="p-2 rounded bg-gray-800 text-white border border-gray-600"
        >
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </div>
  );
}
