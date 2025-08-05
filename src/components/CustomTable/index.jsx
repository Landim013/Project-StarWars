import * as S from "./styles";

function DataTable({
  columns = [],
  data = [],
  textColor,
  bordeColor,
  headerColor,
}) {
  // bordeColor, textColor, headerColor
  console.log(textColor, "cor");
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
              >
                {col.title}
              </S.TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
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
