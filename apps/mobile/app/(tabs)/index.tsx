import { View } from 'react-native'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background px-6 py-10">
      <Text className="text-xl font-bold text-foreground">Welcome to Nativewind!</Text>
      <Button>
        <Text>Button</Text>
      </Button>
      <Input />
      <CardPreview />
    </View>
  )
}

export function CardPreview() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex-row">
        <View className="flex-1 gap-1.5">
          <CardTitle>Subscribe to our newsletter</CardTitle>
          <CardDescription>Enter your details to receive updates and tips</CardDescription>
        </View>
      </CardHeader>
      <CardContent>
        <View className="w-full justify-center gap-4">
          <View className="gap-2">
            <Text className="text-sm font-medium text-foreground">Email</Text>
            <Input id="email" placeholder="m@example.com" />
          </View>
          <View className="gap-2">
            <Text className="text-sm font-medium text-foreground">Name</Text>
            <Input id="name" placeholder="John Doe" />
          </View>
        </View>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">
          <Text>Subscribe</Text>
        </Button>
        <Button variant="outline" className="w-full">
          <Text>Later</Text>
        </Button>
      </CardFooter>
    </Card>
  )
}
