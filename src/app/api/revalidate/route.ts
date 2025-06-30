import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const path = searchParams.get('path')
  const secret = searchParams.get('secret')

  // Check for secret to confirm this is a valid request
  if (secret !== (process.env.REVALIDATION_SECRET || 'default-secret')) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  if (!path) {
    return NextResponse.json({ message: 'Missing path' }, { status: 400 })
  }

  try {
    // Revalidate the specific path
    revalidatePath(path)

    // Also revalidate related paths
    if (path === '/') {
      // If homepage is being revalidated, also revalidate product-related pages
      revalidatePath('/products')
      revalidatePath('/categories')
    }

    return NextResponse.json({
      revalidated: true,
      path,
      message: `Path ${path} revalidated successfully`,
    })
  } catch (err) {
    console.error('Error revalidating:', err)
    return NextResponse.json(
      {
        message: 'Error revalidating',
        error: err instanceof Error ? err.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Revalidation endpoint is working. Use POST method to revalidate.',
  })
}
