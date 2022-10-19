import { format } from "date-fns"

const PostDate = ({ date }) => {
  const formatDate = !!date && date.split(" ").join("T")
  return !!date && format(new Date(formatDate), "MMMM dd, yyyy")
}

export { PostDate as Date }
