import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./Table/Table";

const users = [
  { id: 1, name: "Əli Məmmədov", role: "Software Engineer", status: "Active" },
  { id: 2, name: "Aygün Əliyeva", role: "Product Manager", status: "Offline" },
  { id: 3, name: "Vəli Həsənov", role: "UI/UX Designer", status: "Active" },
];

export default function UsersTable() {
  return (
    <div className="p-6">
      <Table variant="default">
        <TableHeader>
          <TableRow>
            <TableHead>İstifadəçi Adı</TableHead>
            <TableHead>Vəzifə</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Əməliyyat</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium text-gray-900">
                {user.name}
              </TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {user.status}
                </span>
              </TableCell>
              <TableCell className="text-right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
