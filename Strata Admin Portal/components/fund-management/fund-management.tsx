import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FundManagement() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold tracking-tight">Fund Management</h2>
      <p className="text-muted-foreground">View and manage your strata funds.</p>

      <Card>
        <CardHeader>
          <CardTitle>Administration Fund</CardTitle>
          <CardDescription>Current balance and transaction history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$24,560</div>
          <p className="text-sm text-muted-foreground mt-2">
            This page would display detailed fund information, transaction history, and financial reports.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Capital Works Fund</CardTitle>
          <CardDescription>Current balance and transaction history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$156,200</div>
          <p className="text-sm text-muted-foreground mt-2">
            This page would display detailed fund information, transaction history, and financial reports.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

