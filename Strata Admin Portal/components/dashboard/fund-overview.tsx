import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface FundOverviewProps {
  className?: string
}

export function FundOverview({ className }: FundOverviewProps) {
  // This would typically come from an API
  const fundData = {
    administration: [
      { month: "Jan", income: 5200, expenses: 4100 },
      { month: "Feb", income: 5200, expenses: 3900 },
      { month: "Mar", income: 5200, expenses: 4500 },
      { month: "Apr", income: 5200, expenses: 4800 },
      { month: "May", income: 5200, expenses: 3700 },
      { month: "Jun", income: 5200, expenses: 4200 },
    ],
    capital: [
      { month: "Jan", income: 3100, expenses: 0 },
      { month: "Feb", income: 3100, expenses: 0 },
      { month: "Mar", income: 3100, expenses: 12000 },
      { month: "Apr", income: 3100, expenses: 0 },
      { month: "May", income: 3100, expenses: 0 },
      { month: "Jun", income: 3100, expenses: 5000 },
    ],
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Fund Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="administration">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="administration">Administration</TabsTrigger>
            <TabsTrigger value="capital">Capital Works</TabsTrigger>
          </TabsList>
          <TabsContent value="administration" className="pt-4">
            <div className="h-[240px] w-full">
              {/* Chart would go here */}
              <div className="text-center h-full flex flex-col items-center justify-center border rounded-md">
                <p className="text-sm text-muted-foreground mb-2">Administration Fund Balance</p>
                <p className="text-2xl font-bold">$24,560</p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-xs text-muted-foreground">Income</p>
                    <p className="text-sm font-medium">$5,200/mo</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Expenses</p>
                    <p className="text-sm font-medium">$4,200/mo</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Surplus</p>
                    <p className="text-sm font-medium">$1,000/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="capital" className="pt-4">
            <div className="h-[240px] w-full">
              {/* Chart would go here */}
              <div className="text-center h-full flex flex-col items-center justify-center border rounded-md">
                <p className="text-sm text-muted-foreground mb-2">Capital Works Fund Balance</p>
                <p className="text-2xl font-bold">$156,200</p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-xs text-muted-foreground">Income</p>
                    <p className="text-sm font-medium">$3,100/mo</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Expenses</p>
                    <p className="text-sm font-medium">$2,833/mo</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">YTD Savings</p>
                    <p className="text-sm font-medium">$1,602</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

