import { cn } from "../../lib/utils";

function Table(props) {
  const { className = "", ...rest } = props;
  return (
    <div className="relative w-full overflow-auto">
      <table className={cn("w-full caption-bottom text-sm", className)} {...rest} />
    </div>
  );
}

function TableHeader(props) {
  const { className = "", ...rest } = props;
  return <thead className={cn("[&_tr]:border-b", className)} {...rest} />;
}

function TableBody(props) {
  const { className = "", ...rest } = props;
  return <tbody className={cn("[&_tr:last-child]:border-0", className)} {...rest} />;
}

function TableFooter(props) {
  const { className = "", ...rest } = props;
  return (
    <tfoot
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...rest}
    />
  );
}

function TableRow(props) {
  const { className = "", ...rest } = props;
  return (
    <tr
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...rest}
    />
  );
}

function TableHead(props) {
  const { className = "", ...rest } = props;
  return (
    <th
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...rest}
    />
  );
}

function TableCell(props) {
  const { className = "", ...rest } = props;
  return (
    <td
      className={cn(
        "p-4 align-middle [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...rest}
    />
  );
}

function TableCaption(props) {
  const { className = "", ...rest } = props;
  return (
    <caption
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...rest}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
