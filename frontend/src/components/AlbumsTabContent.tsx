import { Library } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import AlbumsTable from "./AlbumsTable";

const AlbumsTabContent = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Library className="size-5 text-violet-500" />
              Albums Library
            </CardTitle>
            <CardDescription>Manage the album collection</CardDescription>
          </div>
          <Button>+</Button>
        </div>
      </CardHeader>
      <CardContent>
        <AlbumsTable />
      </CardContent>
    </Card>
  );
};

export default AlbumsTabContent;
