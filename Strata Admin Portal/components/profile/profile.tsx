import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Profile() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold tracking-tight">My Profile</h2>
      <p className="text-muted-foreground">Manage your account information.</p>

      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="/placeholder-user.jpg" alt="User" />
          <AvatarFallback>CM</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-semibold">Committee Member</h3>
          <p className="text-muted-foreground">Treasurer</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>Update your personal details</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This page would allow committee members to update their profile information, contact details, and account
            settings.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>Manage your password and security options</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This section would allow committee members to update their password, enable two-factor authentication, and
            manage other security settings.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

