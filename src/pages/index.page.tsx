import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { NextPage } from 'next'

import { Button } from '@/components/ui/button'

const Home: NextPage = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle>Sample Title</CardTitle>
            <CardDescription>Sample Description</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col my-12">Sample Content</div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="outline">選択する</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default Home
