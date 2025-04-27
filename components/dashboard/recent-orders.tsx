import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, ShoppingCart } from "lucide-react"
import Link from "next/link"

export function RecentOrders() {
  // This would come from your database in a real app
  const orders = [
    {
      id: "1",
      products: ["Premium Dog Food (30lb)", "Dental Chews (Pack of 10)"],
      date: "2023-05-01",
      total: "$65.99",
      status: "delivered",
    },
  ]

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Order #{order.id}</CardTitle>
                <CardDescription>{order.date}</CardDescription>
              </div>
              <Badge variant="outline">{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {order.products.map((product, index) => (
                <div key={index} className="flex items-center">
                  <Package className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{product}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-2 font-medium">
                <span>Total:</span>
                <span>{order.total}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button asChild variant="outline">
              <Link href={`/dashboard/orders/${order.id}`}>View Order</Link>
            </Button>
            <Button asChild>
              <Link href="/shop">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Shop Again
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
      <div className="flex justify-center">
        <Button asChild>
          <Link href="/shop">Browse Products</Link>
        </Button>
      </div>
    </div>
  )
}
