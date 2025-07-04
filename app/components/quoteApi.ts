interface Quote {
  _id: string;
  content: string;
  author: string;
  // any other fields from API
}

export async function fetchQuote(): Promise<{ quote: string; author: string }> {
  try {
    const response = await fetch("https://api.quotable.io/random", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { quote: data.content, author: data.author };
  } catch (error) {
    console.error("Error fetching quote:", error);
    throw error;
  }
}

export const searchQuotes = async (query: string): Promise<Quote[]> => {
  try {
    const response = await fetch(`https://api.quotable.io/search/quotes?query=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error("Failed to fetch quotes.");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching quotes:", error);
    throw error;
  }
};
