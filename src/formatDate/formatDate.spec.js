import { describe, expect, test } from "vitest";
import { formatDate } from "./formatDate";

describe("formatDate function", () => {
  const testDate = new Date(2010, 6, 10);

  test("formats date as YYYY-MM-DD by default", () => {
    const formattedDate = formatDate(testDate);

    expect(formattedDate).toBe("2010-07-10");
  });

  test("formats date as DD/MM/YYYY when specified", () => {
    const formattedDate = formatDate(testDate, "DD/MM/YYYY");

    expect(formattedDate).toBe("10/07/2010");
  });

  test("throw error for invalid format", () => {
    const invalidDateCallback = () => formatDate(testDate, "MM-DD-YYYY");

    expect(invalidDateCallback).toThrow("Invalid date format");
  });

  test("correctly formats dates with single-digit days and months", () => {
    const earlyDate = new Date(2024, 0, 1);
    const formattedDate = formatDate(earlyDate);

    expect(formattedDate).toBe("2024-01-01");
  });

  test("does not add zeros to two-digit numbers", () => {
    const lateDate = new Date(2023, 11, 31);
    const formattedDate = formatDate(lateDate, "DD/MM/YYYY");

    expect(formattedDate).toBe("31/12/2023");
  });
});
