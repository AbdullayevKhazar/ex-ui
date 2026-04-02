import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@khazarabdulayev/ex-ui";


export function TablePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Table</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Variant: default, striped, borderless. Ölçü: sm, md, lg.
      </p>
      <Table size="md" variant="striped">
        <TableHeader>
          <TableRow>
            <TableHead>Ad</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Vəzifə</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Əli</TableCell>
            <TableCell>ali@example.com</TableCell>
            <TableCell>Developer</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Aysel</TableCell>
            <TableCell>aysel@example.com</TableCell>
            <TableCell>Designer</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <pre className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 text-sm">
        <code>{`<Table variant="striped">
  <TableHeader>
    <TableRow>
      <TableHead>Ad</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Məlumat</TableCell>
    </TableRow>
  </TableBody>
</Table>`}</code>
      </pre>
    </div>
  );
}
