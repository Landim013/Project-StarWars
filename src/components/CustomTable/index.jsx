import { useState } from "react";
import saberGreen from "../../assets/icons/lightsaberGreen.svg";
import saberRed from "../../assets/icons/lightsaberRed.svg";
import * as S from "./styles";
function DataTable({
  columns = [],
  data = [],
  textColor,
  bordeColor,
  headerColor,
}) {
  const initialSortKey = columns.find((col) => col.sortKey)?.sortKey ?? null;
  const [sortConfig, setSortConfig] = useState({
    key: initialSortKey,
    direction: "asc",
  });
  const handleSort = (index) => {
    const key = columns[index].sortKey;
    if (!key) return;

    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key] ?? "";
    const bValue = b[sortConfig.key] ?? "";

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
    }

    return sortConfig.direction === "asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });
  return (
    <S.TableWrapper>
      <S.Table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <S.TableHeader
                key={index}
                $size={col.size}
                $textColor={textColor}
                $headerColor={headerColor}
                onClick={() => handleSort(index)}
                style={{ cursor: col.sortKey ? "pointer" : "default" }}
              >
                {col.title}
                {sortConfig.key === col.sortKey && (
                  <>
                    {" "}
                    {sortConfig.direction === "asc" ? (
                      <S.SaberUp src={saberGreen} />
                    ) : (
                      <S.SaberDown src={saberRed} />
                    )}{" "}
                  </>
                )}
              </S.TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <S.TableCell
                  key={colIndex}
                  $size={col.size}
                  $textColor={textColor}
                  $bordeColor={bordeColor}
                >
                  {col.render(item)}
                </S.TableCell>
              ))}
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.TableWrapper>
  );
}

export default DataTable;
