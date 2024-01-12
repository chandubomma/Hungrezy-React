import {
  Badge,
  Card,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
} from "@tremor/react";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import { RxCross2 } from "react-icons/rx";
import { FaChevronRight } from "react-icons/fa6";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

const menuItems = [
  {
    id: "MENU-001",
    name: "Burger",
    price: 10,
    category: "Main Course",
    available: true,
  },
  {
    id: "MENU-002",
    name: "Pizza",
    price: 20,
    category: "Main Course",
    available: true,
  },
  {
    id: "MENU-003",
    name: "Pasta",
    price: 15,
    category: "Main Course",
    available: true,
  },
  {
    id: "MENU-004",
    name: "Coke",
    price: 5,
    category: "Drinks",
    available: true,
  },
  {
    id: "MENU-005",
    name: "Fries",
    price: 5,
    category: "Appetizer",
    available: true,
  },
  {
    id: "MENU-006",
    name: "Salad",
    price: 5,
    category: "Appetizer",
    available: true,
  },
  {
    id: "MENU-007",
    name: "Ice Cream",
    price: 5,
    category: "Dessert",
    available: false,
  },
  {
    id: "MENU-008",
    name: "Cake",
    price: 5,
    category: "Dessert",
    available: true,
  },
  {
    id: "MENU-009",
    name: "Coffee",
    price: 5,
    category: "Drinks",
    available: true,
  },
  {
    id: "MENU-010",
    name: "Tea",
    price: 5,
    category: "Drinks",
    available: false,
  },
  {
    id: "MENU-011",
    name: "Sandwich",
    price: 5,
    category: "Main Course",
    available: true,
  },
  {
    id: "MENU-012",
    name: "Bread",
    price: 5,
    category: "Appetizer",
    available: true,
  },
  {
    id: "MENU-013",
    name: "Milkshake",
    price: 5,
    category: "Drinks",
    available: true,
  },
  {
    id: "MENU-014",
    name: "Fruit Salad",
    price: 5,
    category: "Dessert",
    available: false,
  },
  {
    id: "MENU-015",
    name: "Noodles",
    price: 5,
    category: "Main Course",
    available: true,
  },
  {
    id: "MENU-016",
    name: "Soup",
    price: 5,
    category: "Appetizer",
    available: false,
  },
  {
    id: "MENU-017",
    name: "Muffin",
    price: 5,
    category: "Dessert",
    available: true,
  },
  {
    id: "MENU-018",
    name: "Pancake",
    price: 5,
    category: "Dessert",
    available: true,
  },
  {
    id: "MENU-019",
    name: "Juice",
    price: 5,
    category: "Drinks",
    available: true,
  },
  {
    id: "MENU-020",
    name: "Eggs",
    price: 5,
    category: "Main Course",
    available: false,
  },
  {
    id: "MENU-021",
    name: "Bacon",
    price: 5,
    category: "Main Course",
    available: true,
  },
  {
    id: "MENU-022",
    name: "Sausage",
    price: 5,
    category: "Main Course",
    available: true,
  },
  {
    id: "MENU-023",
    name: "Steak",
    price: 5,
    category: "Main Course",
    available: true,
  },
  {
    id: "MENU-024",
    name: "Chicken",
    price: 5,
    category: "Main Course",
    available: true,
  },
  {
    id: "MENU-025",
    name: "Turkey",
    price: 5,
    category: "Main Course",
    available: true,
  },
  {
    id: "MENU-026",
    name: "Fish",
    price: 5,
    category: "Main Course",
    available: false,
  },
  {
    id: "MENU-027",
    name: "Lobster",
    price: 5,
    category: "Main Course",
    available: true,
  },
  {
    id: "MENU-028",
    name: "Crab",
    price: 5,
    category: "Main Course",
    available: true,
  },
  {
    id: "MENU-029",
    name: "Shrimp",
    price: 5,
    category: "Main Course",
    available: true,
  },
  {
    id: "MENU-030",
    name: "Clam",
    price: 5,
    category: "Main Course",
    available: false,
  },
];

const MenuList = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const filteredMenuItems = menuItems.filter((menuItem) => {
    if (
      (!statusFilter || statusFilter === "all") &&
      (!categoryFilter || categoryFilter === "all")
    ) {
      return true;
    }

    if (!statusFilter && categoryFilter) {
      return menuItem.category.toLowerCase().includes(categoryFilter);
    }
    const statusMatch =
      statusFilter === "all" ||
      menuItem.available === (statusFilter === "published");

    const categoryMatch =
      categoryFilter === "all" ||
      menuItem.category.toLowerCase().includes(categoryFilter);

    return statusMatch && categoryMatch;
  });
  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Menu Items</h1>
        <div className="flex items-center py-3 gap-2 mx-5">
          <p>Admin</p>
          <span>
            <FaChevronRight className="text-gray-500" />
          </span>
          <p className="text-orange-500 underline">Menu Items</p>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-y-5 items-center mt-2 sm:gap-x-5">
        <div className="flex items-center">
          <p className="text-sm font-semibold text-gray-500">Status: &nbsp;</p>
          <Select
            className="w-[10rem]"
            placeholder="Status"
            defaultValue="all"
            value={statusFilter}
            onValueChange={setStatusFilter}
          >
            <SelectItem value="all" className="cursor-pointer" defaultChecked>
              All
            </SelectItem>
            <SelectItem value="published" className="cursor-pointer">
              Published
            </SelectItem>
            <SelectItem value="draft" className="cursor-pointer">
              Draft
            </SelectItem>
          </Select>
        </div>
        <div className="flex items-center">
          <p className="text-sm font-semibold text-gray-500">
            Category: &nbsp;
          </p>
          <Select
            className="w-[10rem]"
            placeholder="Category"
            defaultValue="all"
            onValueChange={setCategoryFilter}
            value={categoryFilter}
          >
            <SelectItem value="all" className="cursor-pointer">
              All
            </SelectItem>
            <SelectItem value="main-course" className="cursor-pointer">
              Main Course
            </SelectItem>
            <SelectItem value="appetizer" className="cursor-pointer">
              Appetizer
            </SelectItem>
            <SelectItem value="dessert" className="cursor-pointer">
              Dessert
            </SelectItem>
            <SelectItem value="drinks" className="cursor-pointer">
              Drinks
            </SelectItem>
          </Select>
        </div>
      </div>
      <Table className="mt-4 h-[30rem] overflow-y-scroll">
        <TableHead>
          <TableRow>
            <TableHeaderCell>MenuItem ID</TableHeaderCell>
            <TableHeaderCell>MenuItem Name</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredMenuItems.map((menuItem) => (
            <TableRow key={menuItem.id}>
              <TableCell>{menuItem.id}</TableCell>
              <TableCell>{menuItem.name}</TableCell>
              <TableCell>{menuItem.price}</TableCell>
              <TableCell>{menuItem.category}</TableCell>
              <TableCell>
                <Badge
                  className="px-3 py-1 flex items-center w-28 justify-center"
                  color={menuItem.available === true ? "green" : "pink"}
                  icon={menuItem.available === true ? BadgeCheckIcon : RxCross2}
                >
                  <Text>
                    {menuItem.available === true ? "Published" : "Draft"}
                  </Text>
                </Badge>
              </TableCell>
              <TableCell className="flex items-center justify-center lg:-ml-14 md:-ml-10">
                <div className="flex w-fit gap-3">
                  <Link
                    to={`/restaurant/edit-menu?id=${menuItem.id}`}
                    className="flex items-center justify-center rounded-md cursor-pointer"
                  >
                    <CiEdit className="w-5 h-5 text-gray-500" />
                  </Link>
                  <Link className="flex items-center justify-center rounded-md cursor-pointer">
                    <MdDeleteOutline className="w-5 h-5 text-red-500" />
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MenuList;
