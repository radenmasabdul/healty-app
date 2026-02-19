"use client";

import { useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

interface GlobalToolbarProps {
    categories: string[];
    selected: string;
    search: string;
    onSelect: (value: string) => void;
    onSearch: (value: string) => void;
    placeholder?: string;
};

export default function GlobalToolbar ({
    categories,
    selected,
    search,
    onSelect,
    onSearch,
    placeholder = "Search..."
}: GlobalToolbarProps) {

    const handleSelect = useCallback(
        (value: string) => {
            onSelect(value === selected ? "" : value)
        },
        [selected, onSelect]
    );

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onSearch(e.target.value)
        },
        [onSearch]
    );

    const badgeStyle = (isActive: boolean) =>
        `cursor-pointer px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
            isActive
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-surface text-primary hover:bg-surface/80"
        }`;

    const styleInput="w-full md:w-80 px-4 py-2 text-secondary border border-default rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

    return (
        <div className="space-y-4">
            <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    id="search"
                    name="search"
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder={placeholder}
                    className={`${styleInput} pl-9`}
                />
            </div>

            <div className="flex flex-wrap gap-2">
                <Badge
                    onClick={() => handleSelect("")}
                    className={badgeStyle(selected === "")}
                >
                    All
                </Badge>

                {categories.map((item) => (
                    <Badge
                        key={item}
                        onClick={() => handleSelect(item)}
                        className={badgeStyle(selected === item)}
                    >
                        {item.replace(/-/g, " ")}
                    </Badge>
                ))}
            </div>
        </div>
    )
}