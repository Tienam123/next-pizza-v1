"use client"
import FilterCheckbox, {FilterCheckboxProps} from "@/components/shared/filter-checkbox";
import React from "react";
import {Input} from "@/components/ui/input";

type Item = FilterCheckboxProps;

export interface CheckboxFiltersGroupProps {
    title: string;
    items: Item[]
    defaultItems?: Item[]
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void
    defaultValue?: string[];
    className?: string;
}

const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = ({
                                                                       title,
                                                                       items,
                                                                       defaultItems,
                                                                       limit = 5,
                                                                       searchInputPlaceholder = 'Поиск...',
                                                                       className,
                                                                       onChange,
                                                                       defaultValue
                                                                   }) => {
    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

           <div className="mb-5">
                <Input
                    placeholder={searchInputPlaceholder}
                    className="bg-gray-50 border-none"
                />
           </div>

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {items.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={false}
                        onCheckedChange={(ids) => console.log(ids)}
                    />
                ))}
            </div>

        </div>
    );
};

export default CheckboxFiltersGroup;